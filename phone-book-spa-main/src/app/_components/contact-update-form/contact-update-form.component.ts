import { Component, OnInit } from '@angular/core';
import {ContactService} from "../../_services/contact.service";
import {ActivatedRoute} from "@angular/router";
import {Contact} from "../../_models/Contact";

@Component({
  selector: 'app-contact-update-form',
  templateUrl: './contact-update-form.component.html',
  styleUrls: ['./contact-update-form.component.css']
})
export class ContactUpdateFormComponent implements OnInit {

  contact!: Contact;
  constructor(private contactService: ContactService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getContactById();
  }

  getContactById(): void{
    const Id = this.route.snapshot.paramMap.get('Id');
    console.log('URL PARAMS:' + Id);

    this.contactService.getContactById(Number(Id)).subscribe(response => {
      this.contact= response;
    });
  }

}
