import {Component, ElementRef, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {ContactService} from "../../_services/contact.service";
import {Contact} from "../../_models/Contact";


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {

  @ViewChild('title') title!: ElementRef;
  @ViewChild('phone') phone!: ElementRef;

  contactList: Contact[]= [];
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.getContactList();
  }

  getContactList(): void {
    this.contactService.getContactList().subscribe( response => {
      console.log(response);
      this.contactList=response;
    });
  }

  deleteContact(Id: number): void{
    this.contactService.deleteContact(Id).subscribe(
      response => {
      console.log(response);
      this.getContactList();
    }, error => {
      console.log(error);
    });
  }

  addContact(title: string , phone: string): void {
    console.log(title +' --  '+ phone)
    const contact= new Contact();
    contact.id=0;
    contact.Title= title.toUpperCase();
    contact.Phone= phone.toUpperCase();
    contact.Status= false;

    this.contactService.addContact(contact).subscribe( response => {
      console.log(response);
      this.getContactList();
    });

    this.clearInputs();
  }

  private clearInputs() : void{
    this.title.nativeElement.value='';
    this.phone.nativeElement.value='';
  }

}
