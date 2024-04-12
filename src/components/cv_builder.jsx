

export function CVBuilder({generalInfo, infoUniv, infoExperience}) {
    return (
        <div className="CV">
            <div className="part1">

                <div className="photo">
                    <img src={generalInfo.imageURL} alt="" />

                </div>

            </div>
            <div className="part2">
                <div className="infoPersonnelles">
                    
                    <h1>{generalInfo.fullName}</h1> 
                    <h3>{generalInfo.profession}</h3> 
                    <p>{generalInfo.telephone}</p> 
                    <p>{generalInfo.email}</p>



                    
                </div>
                <div className="formations">
                    <div className="titre">
                            <h2>Formations</h2>
                    </div>
                    
                    <ul>
                        {infoUniv.map((info) => (
                        <li className="formation" key={info.id}>
                                <div>
                                    <h3>- {info.name} : {info.anneeStart} - { info.anneeEnd}</h3>
                                    <h4>{ info.niveau} en {info.filiere}</h4> 
                                   
                                </div>
                            
                            
                        
                            
                        </li>
                        
                        ))}
                  </ul>
                </div>
                <div className="experience">
                <div className="titre">
                         <h2>Experience proféssionnelles</h2>

                 </div>
                    
                    {infoExperience.map((infoE) => (
                    <li key={infoE.id}>
                    <div>
                                <h3>{infoE.entrepriseNom} : {infoE.poste}</h3>
                                <p>{ infoE.description}</p>
                        
                    </div>
                    
                    
                </li>
                
                ))}
                </div>
            </div>
        </div>
    )
}