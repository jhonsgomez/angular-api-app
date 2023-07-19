import { Component, OnInit } from '@angular/core';
import { BugService } from '../../shared/bug.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html'
})
export class IssueListComponent implements OnInit {
  IssuesList: any = [];

  ngOnInit() {
    this.loadEmployees();
  }

  constructor(public bugService: BugService) { }

  loadEmployees() {
    return this.bugService.GetIssues().subscribe((data: {}) => {
      this.IssuesList = data;
    })
  }

  deleteIusse(data) {
    var index = index = this.IssuesList.map(x => { return x.issue_name }).indexOf(data.issue_name);
    return this.bugService.DeleteBug(data.id).subscribe(res => {
      this.IssuesList.splice(index, 1)
    })
  }
}