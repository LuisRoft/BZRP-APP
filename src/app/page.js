import Card from '@/components/card'

export default async function Home() {
  const data = await getBzrpSessions()
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] mb-24">
        <h1 className='font-bold text-3xl'>BZRP SESSIONS LIST</h1>
      </div>
      <Card sessions={data} />
    </main>
  )
}

async function getBzrpSessions() {  
  const res = await fetch('http://127.0.0.1:8000/sessions', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await res.json()
  if (!res.ok) {
    throw new Error(data.message)
  } 
  console.log(data)
  return data
}

