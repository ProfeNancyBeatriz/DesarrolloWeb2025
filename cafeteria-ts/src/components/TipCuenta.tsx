const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]

type TipCuentaProps = {
    setTip: React.Dispatch<React.SetStateAction<number>>
}  
export default function TipCuenta({setTip} : TipCuentaProps) {
  return (
    <div>
        <h3>Propina</h3>
        <form>
            {tipOptions.map(tip => (
                <div key={tip.id} mt-4 mb-4> 
                    <label htmlFor={tip.id}>{tip.label}</label>
                    <input 
                        id={tip.id}
                        type="radio"
                        name="tip"
                        value={tip.value}
                        onChange={e => setTip(+e.target.value)}
                    />
                </div>
            ))}
        </form>
    </div>
  )
}
