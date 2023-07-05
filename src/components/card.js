export default function Card({ sessions }) {
    return (
        <ul className="grid grid-cols-3 gap-6">  
            {sessions.map((session) => (
                <li key={session.id} className="p-5 backdrop-filter bg-[#363636b8] rounded-xl mb-4   w-80">
                    <a className="cursor-pointer" href={`${session.url}`} target="_blank">   
                        <div className="overflow-hidden rounded-lg">
                            <img src={session.image} alt={`${session.session} poster`} className="object-cover transition transform ease-in-out duration-500 hover:scale-110"/>
                        </div>
                        <div className="mt-5">
                            <h5 className="font-bold mb-2">{session.name}</h5>
                            <p>{session.session}</p>
                        </div>                        
                    </a>                    
                </li>
            ))}            
        </ul>
    )
  }





