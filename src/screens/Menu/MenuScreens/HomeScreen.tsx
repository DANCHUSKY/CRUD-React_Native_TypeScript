import React, { useState } from 'react';
import { Text, View, TextInput, FlatList, Button } from 'react-native';

interface Note {
    id: string;
    content: string;
}

const App = () => {
    const [notes, setNotes] = useState<Note[]>([]);
    const [inputText, setInputText] = useState<string>('');
    const [editNoteId, setEditNoteId] = useState<string | null>(null);

    const addNote = () => {
        if (inputText.trim() !== '') {
            if (editNoteId) {
                // Si editNoteId está presente, estamos editando una nota existente
                setNotes((prevNotes) =>
                    prevNotes.map((note) =>
                        note.id === editNoteId ? { ...note, content: inputText } : note
                    )
                );
                setEditNoteId(null);
            } else {
                // Si editNoteId no está presente, estamos agregando una nueva nota
                setNotes((prevNotes) => [
                    ...prevNotes,
                    { id: Math.random().toString(), content: inputText },
                ]);
            }
            setInputText('');
        }
    };

    const editNote = (id: string) => {
        const noteToEdit = notes.find((note) => note.id === id);
        if (noteToEdit) {
            setInputText(noteToEdit.content);
            setEditNoteId(id);
        }
    };

    const deleteNote = (id: string) => {
        setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    };

    return (
        <View style={{ padding: 16 }}>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 8, paddingLeft: 8 }}
                placeholder="Agregar/editar nota"
                value={inputText}
                onChangeText={(text) => setInputText(text)}
            />
            <Button title={editNoteId ? 'Editar Nota' : 'Agregar Nota'} onPress={addNote} />
            <FlatList
                data={notes}
                renderItem={({ item }) => (
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
                        <Text>{item.content}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Button title="Editar" onPress={() => editNote(item.id)} />
                            <Button title="Eliminar" onPress={() => deleteNote(item.id)} />
                        </View>
                    </View>
                )}
                keyExtractor={(item) => item.id}
                style={{ marginTop: 16 }}
            />
        </View>
    );
}

export default App;
