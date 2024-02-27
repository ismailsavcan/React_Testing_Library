import {render, screen } from '@testing-library/react';
import { Skills } from './skills';

describe('Skills', () => {
    const skills =['HTML', 'CSS', 'Javascript', 'Typescript'];

    test('renders correctly', () => {
        render(<Skills skills={skills}/>)
        const listElement = screen.getByRole('list');
        expect(listElement).toBeInTheDocument();
    });

    test('renders list of skills', () => {
        render(<Skills skills={skills}/>)
        const listItemElements=screen.getAllByRole('listitem');
        //expect(listItemElements).toHaveLength(3); // ->hard coding
        expect(listItemElements).toHaveLength(skills.length);

    });
    test('renders Login Button', () => {
        render(<Skills skills={skills}/>)
        const loginButton=screen.getByRole('button',{name:'Login'});
        expect(loginButton).toBeInTheDocument();
    });

    test('Start Learning Button is not rendered', () => {
        render(<Skills skills={skills}/>)
        const startLearningButton=screen.queryByRole('button', {name:'Start learning'})
        expect(startLearningButton).not.toBeInTheDocument()
    });
});