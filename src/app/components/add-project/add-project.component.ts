import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/Service/project.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Project } from 'src/app/model/project';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  project!: Project;
  isAdd!: boolean;
  projectID!: number;

  constructor(
    private projectService: ProjectService,
    private _router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.project = new Project();
      this.isAdd = params['id'] ? false : true;

      if (this.isAdd) return;

      this.projectService.find(params['id']).subscribe((value) => {
        this.project = value;
      });
      this.projectID = +params['id'];
    });
  }

  OnSubmit(myForm: any) {
    if (this.isAdd) {
      this.projectService.add(myForm.value).subscribe();
    } else {
      const team = this.project.team;
      this.project = myForm.value;
      this.projectService.update(myForm.value, this.projectID,team).subscribe();
    }
    this._router.navigateByUrl('/projects').then(() => {
      window.location.reload();
    });
  }
}
