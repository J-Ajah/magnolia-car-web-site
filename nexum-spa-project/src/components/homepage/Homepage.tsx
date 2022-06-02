import { EditableArea } from '@magnolia/react-editor'
import type { NextPage } from 'next'
import Head from 'next/head'

import { Layout } from '@/components/layouts/Layout'
import type { AuthorPageProps } from '@/types/page-helper-types'

export const Homepage:NextPage<AuthorPageProps> = ({ title, metadata, ...props }) => {
    console.log('props', props)
    return (
        <div className=" mr-auto ml-auto">
          <Head>
            <title>{title}</title>
            <meta name="description" content={title} />
          </Head>
          <div className='border-2 border-[tomato]'>Hello</div>

         <Layout>
         <div className="Basic">
           <section>
               {props['main'] && <EditableArea key="Area" content={props['main'] } />}
           </section>
             <div className=""/>

             <section>
                 {props['news'] && <EditableArea key="Area" content={props['news'] } />}
             </section>
             <div className=""/>

           <section className="Press">
               <section>
                   {props['press'] && <EditableArea key="Area" content={props['press'] } />}
               </section>
           </section>

             <section className="Footer" >
                 <section>
                     {props['footer'] && <EditableArea key="Area" content={props['footer'] } />}
                 </section>
             </section>
        </div>
         </Layout>
        </div>

      )
};