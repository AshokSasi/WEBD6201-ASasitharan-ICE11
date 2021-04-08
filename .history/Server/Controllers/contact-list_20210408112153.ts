import express, {Request, Response, NextFunction} from 'express';

//contact model
import Contact from "../Models/contact";

//display page functions
export function DisplayContactListPage(req:Request,res:Response,next:Function):void
{
 // db.contacts.find()
 Contact.find(function(err, contacts){
    if(err)
    {
      return console.error(err);
    }
    res.render('index', { title: 'Contact List', page: 'contact-list', contacts: contacts, displayName: 'temp'  });
  });
}

export function DisplayEditPage(req:Request,res:Response,next:Function):void
{
    
}

export function DisplayAddPage(req:Request,res:Response,next:Function):void
{
    
}

//process page functions


export function ProcessEditPage(req:Request,res:Response,next:Function):void
{
    
}

export function ProcessAddPage(req:Request,res:Response,next:Function):void
{
    
}

export function ProcessDeletePage(req:Request,res:Response,next:Function):void
{
    
}