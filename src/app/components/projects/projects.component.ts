import { ProjectService } from './../../Service/project.service';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project';
import Swal from 'sweetalert2';
import { Equipe } from 'src/app/model/equipe';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects!: Project[];
  rawData!: Project[];
  search = '';
  status = '';
  level = '';
  teams!: Equipe[];
  clicked = 0;
  p!:number;
  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe((data) => {
      data = data.map((p) => {
        const deadline = new Date(p.deadLine);
        const now = new Date();
        const diff = now.getTime() - deadline.getTime();
        p.deadLine = diff > 0 ? 'En Retard' : p.deadLine;
        return p;
      });
      
      this.projects = data;
      this.rawData = data;
      
    });
    this.projectService.getTeams().subscribe((data) => {
      this.teams = data;
      
    });
  }
  
  updateProjects() {
    this.projects = this.rawData.filter(
      (item) =>
        item.nameProject.toLowerCase().includes(this.search.toLowerCase()) &&
        (item.statusProject.toLowerCase() === this.status.toLowerCase() ||
          !this.status) &&
        (!this.level ||
          (item.team &&
            item.team.niveau.toLowerCase() === this.level.toLowerCase()))
    );
  }
  clickedProject(id: number): void {
    this.clicked = id;
  }
  onSelect(e: any, idProject: number): void {
    const value = e.target.value;

    if (!value) return;
    this.projectService.assignTeamToProject(value, idProject).subscribe(() => {
      this.projectService.getProjects().subscribe((value) => {
        this.clicked = 0;
        value = value.map((p) => {
          const deadline = new Date(p.deadLine);
          const now = new Date();
          const diff = now.getTime() - deadline.getTime();
          p.deadLine = diff > 0 ? 'En Retard' : p.deadLine;
          return p;
        });
        this.rawData = value;
        this.updateProjects();
      });
    });
  }
  onSearchChange(e: any): void {
    this.search = e;
    this.updateProjects();
  }
  onStatusChange(e: any): void {
    this.status = e;
    this.updateProjects();
  }
  onLevelChange(e: any): void {
    this.level = e;
    this.updateProjects();
  }

  deleteProject(id: number) {
    Swal.fire({
      title: 'Voulez vous supprimer cet étudiant?',
      text: 'cette action ne peut pas être annulée ',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Supprimer!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.projectService.delete(id).subscribe(() => {
          this.projectService.getProjects().subscribe((value) => {
            this.projects = value;
          });
        });
        Swal.fire('Supprimé!', 'Projet supprimé avec succées.', 'success');
      }
    });
  }
}
