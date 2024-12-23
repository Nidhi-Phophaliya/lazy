import React from 'react'
import Workflow from './workflow'
//import { onGetWorkflows } from '../_actions/workflow-connections'
// import MoreCredits from './more-creadits'

type Props = {}

const Workflows = async (props: Props) => {
return (
    <div className="relative flex flex-col gap-4">
        <section className='flex flex-col gap-4 p-6'>
            <Workflow 
            description='creating a test workflow'
            id = 'asgyduyasiuiq036'
            name='automation and key'
            publish = {false}
            ></Workflow>
        </section>
    </div>
  )
}

export default Workflows
