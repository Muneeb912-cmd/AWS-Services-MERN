import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import * as Icon from "react-icons/bs";
import {
    MDBFooter,
    MDBContainer,    
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
    return (

        <MDBFooter className='text-center ' color='white' style={{backgroundColor:'#191970'}}>
            <MDBContainer className='p-4'>
                <section className='mb-4'>
                    <MDBBtn outline color="light" floating className='m-1 btn btn-light btn-sm' href='#!' role='button'>
                        <Icon.BsFacebook style={{ fontSize: '18px', color: '#0C356A', marginTop: '3px'}}></Icon.BsFacebook>
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1 btn btn-light btn-sm' href='#!' role='button'>
                        <Icon.BsTwitter style={{ fontSize: '18px', color: '#279EFF', marginTop: '3px' }}></Icon.BsTwitter>
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1 btn btn-light btn-sm' href='#!' role='button'>
                        <Icon.BsGoogle style={{ fontSize: '18px', color: '#898121', marginTop: '3px' }}></Icon.BsGoogle>
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1 btn btn-light btn-sm' href='#!' role='button'>
                        <Icon.BsInstagram style={{ fontSize: '18px', color: '#F94C10', marginTop: '3px'}}></Icon.BsInstagram>
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1 btn btn-light btn-sm' href='#!' role='button'>
                        <Icon.BsLinkedin style={{ fontSize: '18px', color: '#5C4B99', marginTop: '3px'}}></Icon.BsLinkedin>
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1 btn btn-light btn-sm' href='#!' role='button'>
                        <Icon.BsGithub style={{ fontSize: '18px', color: 'black', marginTop: '3px' }}></Icon.BsGithub>
                    </MDBBtn>
                </section>

                <section className=''>
                    <form action=''>
                        <MDBRow className='d-flex justify-content-center'>
                            <MDBCol size="auto">
                                <p className='pt-2'>
                                    <strong>Sign up for our newsletter</strong>
                                </p>
                            </MDBCol>

                            <MDBCol md='5' start>
                                <MDBInput type='email' style={{backgroundColor:'white'}} label='Email address' className='mb-4' />
                            </MDBCol>

                            <MDBCol size="auto">
                                <MDBBtn outline color='light' type='submit' className='mb-4 btn-sm'>
                                    Subscribe
                                </MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </form>
                </section>

                <section className='mb-4'>
                    <p>
                        Streamline operations and enhance efficiency with our user-friendly Department MIS website, your all-in-one solution for managing and optimizing resources.
                    </p>
                </section>


            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2023 Copyright: DukoDevs

            </div>
        </MDBFooter>

    );
}