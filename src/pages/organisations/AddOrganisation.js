import React from 'react'
import AsideBar from '../../components/AsideBar'
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'

const AddOrganisation = () => {
    return (
        <div class="layout-wrapper layout-content-navbar">
            <div class="layout-container">
                {/* Aside  */}
                <AsideBar />
                <div class="layout-page">
                    {/* nav  */}
                    <NavBar />
                    <div class="content-wrapper">
                        <div class="container-xxl flex-grow-1 container-p-y">
                            <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Administration /</span> Organisation</h4>
                            <div class="row">
                                <div class="col-md-10">
                                    <div class="card mb-4">
                                        <h5 class="card-header">Ajouter une organisation</h5>
                                        <div class="card-body">
                                            <div class="mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Nom de l'organisation</label>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="exampleFormControlInput1"
                                                    name="nom"
                                                    placeholder="ONG ONG"
                                                />
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Siège</label>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="exampleFormControlInput1"
                                                    name="siege"
                                                    placeholder="Agoè Assiyéyé"
                                                />
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Téléphone</label>
                                                <input
                                                    type="tel"
                                                    class="form-control"
                                                    id="exampleFormControlInput1"
                                                    name="telephone"
                                                    placeholder="+228 96 32 14 78"
                                                />
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Adresse Email</label>
                                                <input
                                                    type="email"
                                                    class="form-control"
                                                    id="exampleFormControlInput1"
                                                    placeholder="organisationname@example.com"
                                                    name="email"
                                                />
                                            </div>
                                            <div class="mb-3">
                                                <label for="formFile" class="form-label">Logo</label>
                                                <input class="form-control" type="file" id="formFile" />
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleFormControlSelect1" class="form-label">Administrateur de l'organisation</label>
                                                <select class="form-select" id="exampleFormControlSelect1" aria-label="Default select example">
                                                    <option selected>Sélectionner l'administrateur</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                            </div>
                                            <br />
                                            <div>
                                                <button type="submit" class="btn btn-primary">Ajouter</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddOrganisation
