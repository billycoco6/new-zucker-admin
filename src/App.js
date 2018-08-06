import React from 'react'
import { Admin, Resource } from 'react-admin/lib'
import jsonServerProvider from 'ra-data-json-server'
import PickupIcon from '@material-ui/icons/Bookmark'
import DeliverIcon from '@material-ui/icons/Receipt'
import UserIcon from '@material-ui/icons/Group'
// import dataProvider from './dataProvider'
import { PickupList, PickupEdit } from './pickup'
import { DeliverList, DeliverEdit } from './deliver'
import { UserList, UserEdit, UserCreate } from './users'

// const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com')
const dataProvider = jsonServerProvider('http://localhost:5000')
const App = () => (
  <Admin title="Zucker Admin Dashboard" dataProvider={dataProvider}>
    <Resource name="all_pickup" list={PickupList} edit={PickupEdit} icon={PickupIcon} />
    <Resource name="all_deliver" list={DeliverList} edit={DeliverEdit} icon={DeliverIcon} />
    <Resource name="all_messenger" list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon} />
  </Admin>
)

export default App
