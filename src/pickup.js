import React from 'react'
import { List, Edit, Create, DateField, Datagrid, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin/lib';

export const PickupList = (props) => (
    <List {...props} title="All Pickup">
        <Datagrid>
            <DateField source="createddate" />
            <TextField source="owner" />
            <TextField source="orderType" />
            <DateField source="pickupDate" />
            <TextField source="pickupTime" />
            <TextField source="pickupCustomername" />
            <TextField source="pickupPhonenumber" />
            <TextField source="pickupAddress" />
            <TextField source="pickupNote" />
            <TextField source="messenger" />
            <EditButton />
        </Datagrid>
    </List>
);

const PickupTitle = ({ record }) => {
    return <span>Edit Order</span>;
};

export const PickupEdit = (props) => (
    <Edit title={<PickupTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="owner" />
            <DisabledInput source="orderType" />
            <DisabledInput source="pickupAddress" />
            <TextInput source="pickupCustomername" />
            <TextInput source="pickupPhonenumber" />
            <LongTextInput source="pickupNote" />
            <ReferenceInput label="Messenger" source="email" reference="all_messenger">
                <SelectInput optionText="email" optionValue="email" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

// export const PickupCreate = (props) => (
//     <Create {...props}>
//         <SimpleForm>
//             <ReferenceInput label="User" source="userId" reference="users">
//                 <SelectInput optionText="name" />
//             </ReferenceInput>
//             <TextInput source="title" />
//             <LongTextInput source="body" />
//         </SimpleForm>
//     </Create>
// );
