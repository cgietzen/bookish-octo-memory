import type { NextPage } from 'next'
import Head from 'next/head'

import {prisma} from '../db/client'

export default function Home (props: any) {
  return (
    <div>
      <main>
        <h1 className="text-xl font-bold">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
      <code>
          {props.questions}
      </code>
    </div>
  )
}

export const getServerSideProps = async () => {
    const questions = await prisma.pollQuestion.findMany();

    return {
        props: {
            questions: JSON.stringify(questions)
        }
    }
}
