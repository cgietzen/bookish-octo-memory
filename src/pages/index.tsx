import type { NextPage } from 'next'
import Head from 'next/head'

import {trpc} from '../utils/trpc'

export default function Home (props: any) {
    const {data, isLoading} = trpc.useQuery(["getAllQuestions"])

    if (isLoading || !data) return <div>loading...</div>

    return <div>{data[0]?.question}</div>
}
