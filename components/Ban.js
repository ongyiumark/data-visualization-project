export default function Ban( props ) {
  return (
    <div className="flex-col-center bg-stone-200 dynamic-w-sm h-52 rounded-2xl py-5 m-6">
      {props.number && <h1 className="text-5xl text-royalblue font-extrabold mx-5">{props.number.toLocaleString("en-US")}</h1>}
      {props.text1 && <p className="text-lg text-royalblue mx-5">{props.text1}</p>}
      {props.text2 && <p className="text-sm text-royalblue mx-5">{props.text2}</p>}
      {props.text3 && <p className="text-base text-royalblue italic mx-5 my-2">{props.text3}</p>}
    </div>
  )
}