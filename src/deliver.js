import React from 'react'
import { List, Edit, Create, DateField, Datagrid, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput, ImageField } from 'react-admin/lib';

export const DeliverList = (props) => (
    <List {...props} title="All Deliver">
        <Datagrid>
            <DateField source="createddate" />
            <TextField source="owner" />
            <TextField source="orderType" />
            <TextField source="status" />
            <TextField source="deliverCustomername" />
            <TextField source="deliverPhonenumber" />
            <TextField source="deliverAddress" />
            <TextField source="cod" />
            <TextField source="messenger" />
            <EditButton />
        </Datagrid>
    </List>
);

const DeliverTitle = ({ record }) => {
    return <span>Edit Order</span>;
};

export const DeliverEdit = (props) => (
    <Edit title={<DeliverTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="owner" />
            <DisabledInput source="orderType" />
            <p>Pickup Signature</p>
            <ImageField source="pickupSignature" title="Pickup Signature" />
            <TextInput source="deliverCustomername" />
            <TextInput source="deliverPhonenumber" />
            <LongTextInput source="deliverAddress" />
            <LongTextInput source="cod" />
            <p>Deliver Signature</p>
            <ImageField source="signature" />
            <ReferenceInput label="Messenger" source="email" reference="all_messenger">
                <SelectInput optionText="email" optionValue="email" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

// export const DeliverCreate = (props) => (
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
