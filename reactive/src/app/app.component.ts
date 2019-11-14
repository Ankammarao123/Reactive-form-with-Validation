import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive';
constructor(private fb:FormBuilder){}
regform:FormGroup;
ngOnInit() {
  this.regform=this.fb.group({
 'fname':new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+\\.?')]),
 'lname':new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+\\.?')]),
 'email':new FormControl('',[Validators.required,Validators.pattern('^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$')]),
 'password':new FormControl('',[Validators.required,Validators.pattern('^(?=.*\d).{4,8}$')]),
 'pnumber':new FormControl('',[Validators.required,Validators.pattern('[789][0-9]{9}')]),
 'pcard':new FormControl('',[Validators.required,Validators.pattern('[A-Z]{5}[0-9]{4}[A-Z]{1}')]),
  })
  
}
empList=[];
savedata(emp1){
  console.log(emp1);
  this.empList.push(emp1);
  this.regform.reset();
}
deldata(i){
  this.empList.splice(i,1);
}
updatelist:any
editdata(emp,i){
this.regform.patchValue({
  fname:emp.fname,
  lname:emp.lname,
  email:emp.email,
  password:emp.password,
  pnumber:emp.pnumber,
  pcard:emp.pcard
})
this.updatelist=i;
}
updatedata(){
  let update=this.updatelist;
  for(let i=0;i<this.empList.length;i++){
    if( i == update){
  this.empList[i]=this.regform.value;
    }
  }

}
}
