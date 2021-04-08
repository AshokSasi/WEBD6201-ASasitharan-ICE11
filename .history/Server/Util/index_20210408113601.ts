import express, {Request, Response, NextFunction} from 'express';

function UserDisplayName(req:Request): String
{
    if(req.user)
    {
        let user = req.user as UserDocument;
        return user.displayName.toString();

    }
    return '';
}