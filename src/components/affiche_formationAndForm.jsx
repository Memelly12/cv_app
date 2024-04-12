import { Button } from "./button"


export function Formation({ infoUniv, handleclick2 }) {
    
    
 return (
        <div className="listFormation">
            {infoUniv.map((info) => (
                <li key={info.id}>
                    <div>
                        <h2>{info.name}</h2>
                        <h4>{info.filiere}</h4>
                    </div>
                    
                        <Button
                            handleclick={() => {handleclick2(info.id)}}  
                            textBtuton="Supprimer"
                        />
                    
                    
                </li>
                
            ))}
           
            
        </div>
    )
}