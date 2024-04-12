


export function GeneralInfo({
    generalInfo,
    handleChange, handleFileChange}) {
    return (
        <div>
            <h2>informations personelles</h2>
            <form action="">
                <label htmlFor="nom">entrez votre nom</label>
                <input
                    type="text"
                    name="fullName"
                    id="nom"
                    value={generalInfo.fullName}
                    onChange={handleChange}
                />
                <label htmlFor="profession">proféssion</label>
                <input
                    type="text"
                    name="profession"
                    id="profession"
                    value={generalInfo.profession}
                    onChange={handleChange}
                />
                
                <label htmlFor="telephone">numero de telephone</label>
                <input
                    type="text"
                    name="telephone"
                    id="telephone"
                    value={generalInfo.telephone}
                    onChange={handleChange}
                />
                <label htmlFor="email">email</label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    value={generalInfo.email}
                    onChange={handleChange}
                />
                <label htmlFor="image">photo identité</label>
                <input type="file"
                    name="image"
                onChange={handleFileChange}
            />
            </form>
           
        </div>
    )

}





   


