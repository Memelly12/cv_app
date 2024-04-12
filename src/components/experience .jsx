
export function ExperienceProf({handlesubmit, handlechange2, formData2 }) {
    

    return (
        <>
           
            <form action="" onSubmit={handlesubmit}>
                <label htmlFor="entrepriseNom">Nom de l'entréprise</label>
                <input
                    type="text"
                    id="nameEntreprise"
                    name="entrepriseNom"
                    value={formData2.entrepriseNom}
                    onChange={handlechange2}
                />
                <label htmlFor="poste">Poste occupé</label>
                <input
                    type="text"
                    id="poste"
                    name="poste"
                    value={formData2.poste}
                    onChange={handlechange2}

                />
                <label htmlFor="start">Année de début</label>
                <input
                    type="text"
                    id="start"
                    name="start"
                    value={formData2.start}
                    onChange={handlechange2}
                
                />
                <label htmlFor="end">Année de fin</label>
                <input
                    type="text"
                    id="end"
                    name="end"
                    value={formData2.end}
                    onChange={handlechange2}
                
                />
                <label htmlFor="description">Description de l'emploi</label>
                <textarea name="description" id="" cols="30" rows="10" value={formData2.description} onChange={handlechange2}></textarea>
                <button type="submit"> Enregistrer</button>
            </form>
        </>
    )
}