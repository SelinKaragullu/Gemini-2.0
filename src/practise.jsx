const response = await fetch ()
const data = await response.json()

console.log(data)

fetch()
.then(response=>response.json())
.then(data=>console.log(data))
.catch(err=>console.log(err))

async function getSug () {
  const response = await fetch()
  const data = await response.json()
}

getSug()


useEffect(()=>{
const getData = async ()=>{
try{ const response = await fetch ()
  const data = await response.json()

}catch(error{
console.log(error)
throw new Error ("")
}
}

getData()

},[])