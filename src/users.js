import React from 'react';
import { List, Datagrid, EmailField, TextField } from 'react-admin/lib';

export const UserList = (props) => (
    <List title="All users" {...props}>
        <Datagrid>
            <EmailField source="email" />
            <TextField source="name" />
        </Datagrid>
    </List>
);
