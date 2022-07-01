import React from 'react'
import AsideBar from '../../components/AsideBar'
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'

const Utilisateurs = () => {
    return (
        <div className="layout-wrapper layout-content-navbar">
            <div className="layout-container">
                {/* aside  */}
                <AsideBar />
                <div className="layout-page">
                    {/* navbar  */}
                    <NavBar />
                    <div className="content-wrapper">
                        <div class="container-xxl flex-grow-1 container-p-y">
                            <h4 class="fw-bold py-3 mb-4"><a href="/utilisateurs"><span class="text-muted fw-light">Administration /</span> Utilisateurs</a></h4>
                            <div class="card">
                                <h5 class="card-header">Les utilisateurs</h5>
                                <div class="table-responsive text-nowrap">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th>N°</th>
                                                <th>Nom</th>
                                                <th>Adresse mail</th>
                                                <th>Téléphone</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><i class="fab fa-angular fa-lg text-danger me-3"></i> <strong>1</strong></td>
                                                <td>Albert Cook</td>
                                                <td>
                                                    albertcook@gmail.com
                                                </td>
                                                <td><span class="badge bg-label-primary me-1">96321458</span></td>
                                                <td>
                                                    <div class="dropdown">
                                                        <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                            <i class="bx bx-dots-vertical-rounded"></i>
                                                        </button>
                                                        <div class="dropdown-menu">
                                                            <a class="dropdown-item" href="javascript:void(0);"
                                                            ><i class="bx bx-edit-alt me-1"></i> Editer</a
                                                            >
                                                            <a class="dropdown-item" href="javascript:void(0);"
                                                            ><i class="bx bx-trash me-1"></i> Supprimer</a
                                                            >
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><i class="fab fa-react fa-lg text-info me-3"></i> <strong>2</strong></td>
                                                <td>Barry Hunter</td>
                                                <td>
                                                    barryhunter@yahoo.fr
                                                </td>
                                                <td><span class="badge bg-label-success me-1">98653214</span></td>
                                                <td>
                                                    <div class="dropdown">
                                                        <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                            <i class="bx bx-dots-vertical-rounded"></i>
                                                        </button>
                                                        <div class="dropdown-menu">
                                                            <a class="dropdown-item" href="javascript:void(0);"
                                                            ><i class="bx bx-edit-alt me-1"></i> Editer</a
                                                            >
                                                            <a class="dropdown-item" href="javascript:void(0);"
                                                            ><i class="bx bx-trash me-1"></i> Supprimer</a
                                                            >
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><i class="fab fa-vuejs fa-lg text-success me-3"></i> <strong>3</strong></td>
                                                <td>Trevor Baker</td>
                                                <td>
                                                    trevorbaker@gmail.com
                                                </td>
                                                <td><span class="badge bg-label-info me-1">96457814</span></td>
                                                <td>
                                                    <div class="dropdown">
                                                        <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                            <i class="bx bx-dots-vertical-rounded"></i>
                                                        </button>
                                                        <div class="dropdown-menu">
                                                            <a class="dropdown-item" href="javascript:void(0);"
                                                            ><i class="bx bx-edit-alt me-1"></i> Editer</a
                                                            >
                                                            <a class="dropdown-item" href="javascript:void(0);"
                                                            ><i class="bx bx-trash me-1"></i> Supprimer</a
                                                            >
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <i class="fab fa-bootstrap fa-lg text-primary me-3"></i> <strong>4</strong>
                                                </td>
                                                <td>Jerry Milton</td>
                                                <td>
                                                    jerrymilton@gmail.com
                                                </td>
                                                <td><span class="badge bg-label-warning me-1">Pending</span></td>
                                                <td>
                                                    <div class="dropdown">
                                                        <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                            <i class="bx bx-dots-vertical-rounded"></i>
                                                        </button>
                                                        <div class="dropdown-menu">
                                                            <a class="dropdown-item" href="javascript:void(0);"
                                                            ><i class="bx bx-edit-alt me-1"></i> Editer</a
                                                            >
                                                            <a class="dropdown-item" href="javascript:void(0);"
                                                            ><i class="bx bx-trash me-1"></i> Supprimer</a
                                                            >
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tfoot class="table-border-bottom-0">
                                            <tr>
                                                <th>N°</th>
                                                <th>Nom</th>
                                                <th>Adresse mail</th>
                                                <th>Téléphone</th>
                                                <th>Actions</th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>{/* footer  */}
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Utilisateurs
