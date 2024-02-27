import {render, screen} from '@testing-library/react';
import Application from "./application";

describe('Application', () => {
    test('renders correctly',()=>{
        render(<Application/>);

        // const pageHeading=screen.getByRole('heading', {name:'Job Application Form'});
        // expect(pageHeading).toBeInTheDocument();

        // const sectionHeading=screen.getByRole('heading', {name:'Section 1'});
        // expect(sectionHeading).toBeInTheDocument();

        const pageHeading=screen.getByRole('heading', {level:1});
        expect(pageHeading).toBeInTheDocument();

        const sectionHeading=screen.getByRole('heading', {level:2});
        expect(sectionHeading).toBeInTheDocument();

        const paragraphElement=screen.getByText('All fields are mandatory');
        expect(paragraphElement).toBeInTheDocument();

        const titleElement=screen.getByTitle('close');
        expect(titleElement).toBeInTheDocument();

        const valueElement=screen.getByDisplayValue('Ismail');
        expect(valueElement).toBeInTheDocument();

        const imgElement = screen.getByAltText('a person with a laptop');
        expect(imgElement).toBeInTheDocument();

        const customElement=screen.getByTestId('custom-element');
        expect(customElement).toBeInTheDocument();

        const textBoxName=screen.getByRole('textbox',{name:'Name'});
        expect(textBoxName).toBeInTheDocument();

        const nameElement=screen.getByLabelText('Name',{selector:'input'});
        expect(nameElement).toBeInTheDocument();

        const placeHolderFullName=screen.getByPlaceholderText('Fullname');
        expect(placeHolderFullName).toBeInTheDocument()

        const textBoxBio=screen.getByRole('textbox',{name:'Bio'});
        expect(textBoxBio).toBeInTheDocument();

        const comboBox=screen.getByRole('combobox');
        expect(comboBox).toBeInTheDocument();

        const checkBox= screen.getByRole('checkbox');
        expect(checkBox).toBeInTheDocument();

        const termsElement=screen.getByLabelText('I aggree to the terms and conditions');
        expect(termsElement).toBeInTheDocument();

        const button=screen.getByRole('button');
        expect(button).toBeInTheDocument()

    })
    
});