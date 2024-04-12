import { Button } from "./button";


export function DisplayExp({ infoExperience, handleclick2}) {
    return (
        <div className="listexperience">
             <h2>
                Experiences proféssionnelles
            </h2>
            {infoExperience.map((infoE) => (
                <li key={infoE.id}>
                    <div>
                        <h2>{infoE.poste}</h2>
                        <h4>{infoE.entrepriseNom}</h4>
                    </div>
                    <div>
                        <Button
                            handleclick={() => {handleclick2(infoE.id)}}  
                            textBtuton="Supprimer"
                        />
                    </div>
                    
                </li>
                
            ))}
           
            
        </div>
    )
    
}