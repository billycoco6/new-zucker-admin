import React from 'react';
import { List, Edit, Create, Datagrid, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput, EmailField } from 'react-admin/lib';

export const UserList = (props) => (
    <List title="All users" {...props}>
        <Datagrid>
            <EmailField source="email" />
            <TextField source="name" />
            <EditButton />
        </Datagrid>
    </List>
);

const UserTitle = ({ record }) => {
    return <span>Edit User</span>;
};

export const UserEdit = (props) => (
    <Edit title={<UserTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="email" />
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = (props) => (
    <Create {...props}>
        <SimpleForm redirect="list">
            <TextInput source="name" />
            <TextInput source="email" type="email" />
            <TextInput source="password" type="password" />
        </SimpleForm>
    </Create>
);