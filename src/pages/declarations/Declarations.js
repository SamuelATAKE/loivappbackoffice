import React from 'react'
import AsideBar from '../../components/AsideBar'
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'

const Declarations = () => {
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
                            <h4 class="fw-bold py-3 mb-4"><a href="/declarations"><span class="text-muted fw-light">Gestion des violences /</span> Déclarations</a></h4>
                            <div class="card">
                                <h5 class="card-header">
                                    <a href="/ajouter-declaration"><button type="button" class="btn btn-primary">Ajouter</button></a>
                                </h5>
                                <div class="table-responsive text-nowrap">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th>N°</th>
                                                <th>Intitulé</th>
                                                <th>Victime</th>
                                                <th>Télé-opérateur</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><i class="fab fa-angular fa-lg text-danger me-3"></i> <strong>1</strong></td>
                                                <td>Albert Cook</td>
                                                <td>
                                                    Albert Cook
                                                </td>
                                                <td><span class="badge bg-label-primary me-1">KOFFI A.</span></td>
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
                                                    Barry Hunter
                                                </td>
                                                <td><span class="badge bg-label-success me-1">Abalo F.</span></td>
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
                                                    Trevor Baker
                                                </td>
                                                <td><span class="badge bg-label-info me-1">Amah Kwatcha</span></td>
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
                                                    Jerry Milton
                                                </td>
                                                <td><span class="badge bg-label-warning me-1">Baruc Trevor</span></td>
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
                                                <th>Intitulé</th>
                                                <th>Victime</th>
                                                <th>Télé-opérateur</th>
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

export default Declarations
