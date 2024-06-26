


export function StudyForm({formData, handleSubmit, handleChange}) {
    return (
        <>
            <h2>Études unniversitaires</h2>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="name">Nom de université</label>
                <input
                    type="text"
                    id="nameUniversity"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
   

                />
                <label htmlFor="filiere">Domaine étude</label>
                <input
                    type="text"
                    id="filiere"
                    name="filiere"
                    value={formData.filiere}
                    onChange={handleChange}

                   

                />
                 <label htmlFor="niveau">Niveau étude</label>
                <input
                    type="text"
                    id="niveau"
                    name="niveau"
                    value={formData.niveau}
                    onChange={handleChange}

                   

                />
                <label htmlFor="anneeStart">année de debut</label>
                <input
                    type="text"
                    id="anneeEtude"
                    name="anneeStart"
                    value={formData.anneeStart}
                    onChange={handleChange}

                
                />
                <label htmlFor="anneeEnd">année de fin</label>
                 <input
                    type="text"
                    id="anneeEtude"
                    name="anneeEnd"
                    value={formData.anneeEnd}
                    onChange={handleChange}

                
                />
                
                
                <button type="submit">envoyer</button>
            </form>
            
           

        </>
      
    )
}


