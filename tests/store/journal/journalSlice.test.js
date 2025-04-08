import { addNewEmptyNote, journalSlice, savingNewNote } from "../../../src/store/journal/journalSlice";
import { emptyNote, initialState } from "../../fixtures/journalFixtures";

describe('Pruebas en el journalSlice', () => {

    test('debe de regresar el estado inicial y llamarse "journal"', () => {

        const state = journalSlice.reducer( initialState, {} );

        expect( journalSlice.name ).toBe('journal');
        expect( state ).toBe( initialState );

    });

    test('debe de guardar la nueva nota', () => {

        const state = journalSlice.reducer( initialState, savingNewNote() );

        expect( state.isSaving ).toBe( true );

    });

    test('debe de añadir una nota vacia', () => {

        const state = journalSlice.reducer( initialState, addNewEmptyNote( emptyNote ) )

        console.log(state)

        expect( state ).toEqual({
            isSaving: false,
            messageSaved: '',
            notes: [{ 
                title: emptyNote.title, 
                body: emptyNote.body, 
                date: emptyNote.date, 
                id: emptyNote.id 
            }],
            active: null
        })

    });



});