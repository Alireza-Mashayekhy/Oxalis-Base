import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/types";
import {
  loadCounters,
  addNewCounter,
  modifyCounter,
  removeCounter,
} from "@/dispatchers/counter";
import { Counter } from "@/types";
import Modal from "../../Modal";

const CounterList: React.FC = () => {
  const dispatch = useDispatch();
  const counters = useSelector(
    (state: RootState) => state.counter.countersList
  );

  const [editingCounter, setEditingCounter] = useState<Counter | null>(null);
  const [newCounterName, setNewCounterName] = useState<string>("");
  const [newCounterValue, setNewCounterValue] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    dispatch(loadCounters());
  }, [dispatch]);

  const handleEdit = (counter: Counter) => {
    setEditingCounter(counter);
  };

  const handleSave = () => {
    if (editingCounter) {
      dispatch(
        modifyCounter(
          editingCounter.id,
          editingCounter.name,
          editingCounter.value
        )
      );
      setEditingCounter(null);
    }
  };

  const handleDelete = (id: string) => {
    dispatch(removeCounter(id));
  };

  const handleCreate = () => {
    dispatch(addNewCounter(newCounterName, newCounterValue));
    setNewCounterName("");
    setNewCounterValue(0);
    setShowModal(false);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(counters) &&
            counters.map((counter: Counter) => (
              <tr key={counter.id}>
                <td>
                  {editingCounter && editingCounter.id === counter.id ? (
                    <input
                      type="text"
                      value={editingCounter.name}
                      onChange={(e) =>
                        setEditingCounter({
                          ...editingCounter,
                          name: e.target.value,
                        })
                      }
                    />
                  ) : (
                    counter.name
                  )}
                </td>
                <td>
                  {editingCounter && editingCounter.id === counter.id ? (
                    <input
                      type="number"
                      value={editingCounter.value}
                      onChange={(e) =>
                        setEditingCounter({
                          ...editingCounter,
                          value: parseInt(e.target.value, 10),
                        })
                      }
                    />
                  ) : (
                    counter.value
                  )}
                </td>
                <td>
                  {editingCounter && editingCounter.id === counter.id ? (
                    <button onClick={handleSave}>Save</button>
                  ) : (
                    <button onClick={() => handleEdit(counter)}>Edit</button>
                  )}
                  <button onClick={() => handleDelete(counter.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div>
        <button onClick={() => setShowModal(true)}>Create Counter</button>
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h2>Create New Counter</h2>
          <input
            type="text"
            placeholder="Name"
            value={newCounterName}
            onChange={(e) => setNewCounterName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Initial Value"
            value={newCounterValue}
            onChange={(e) => setNewCounterValue(parseInt(e.target.value, 10))}
          />
          <button onClick={handleCreate}>Create</button>
        </Modal>
      )}
    </div>
  );
};

export default CounterList;
