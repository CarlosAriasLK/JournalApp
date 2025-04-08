import { addNewEmptyNote, journalSlice, savingNewNote, setActiveNote, setNotes } from "../../../src/store/journal/journalSlice";
import { emptyNote, initialState, note, notes } from "../../fixtures/journalFixtures";

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

    test('debe de establecer una nota activa', () => {

        const state = journalSlice.reducer( initialState, setActiveNote( note ));

        expect( state ).toEqual({
            isSaving: false,
            messageSaved: '',
            notes: [],
            active: {
                title: note.title,
                body: note.body,
                date: note.date,
                id: note.id,
            }
        })

    });


    test('debe establecer las notas', () => {

        const state = journalSlice.reducer( initialState, setNotes( notes ) );

        expect( state ).toEqual({
            isSaving: false,
            messageSaved: '',
            notes: [
              {
                title: 'Duro',
                body: 'El mas fresa pa',
                date: '1744074844977',
                id: 'TEST-ID'
              },
              {
                title: 'el mas duro',
                body: 'El mas',
                date: '1744074844977',
                id: 'TEST-ID2'
              },
              {
                title: 'Duro casi',
                body: 'El mas fresa pa',
                date: '1744074844977',
                id: 'TEST-ID3'
              },
              {
                title: 'Duro duro',
                body: 'El mas fresa pa',
                date: '1744074844977',
                id: 'TEST-ID4'
              }
            ],
            active: null
          });

    });



});