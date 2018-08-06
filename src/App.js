import React from 'react'
import { Admin, Resource } from 'react-admin/lib'
import jsonServerProvider from 'ra-data-json-server'
import PickupIcon from '@material-ui/icons/Book'
import DeliverIcon from '@material-ui/icons/Book'
import UserIcon from '@material-ui/icons/Group'
// import dataProvider from './dataProvider'
import authProvider from './authProvider'
import { PickupList, PickupEdit, PickupCreate } from './pickup'
import { DeliverList, DeliverEdit, DeliverCreate } from './deliver'
import { UserList } from './users'

// const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com')
const dataProvider = jsonServerProvider('http://localhost:5000')
const App = () => (
  <Admin authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="all_pickup" list={PickupList} edit={PickupEdit} create={PickupCreate} icon={PickupIcon} />
    <Resource name="all_deliver" list={DeliverList} edit={DeliverEdit} create={DeliverCreate} icon={DeliverIcon} />
    <Resource name="all_messenger" list={UserList} icon={UserIcon} />
  </Admin>
)

export default App
