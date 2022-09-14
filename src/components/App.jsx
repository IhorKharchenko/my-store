import { useEffect, useState } from 'react';
import { Box } from 'components/Box';
import * as API from './services/api';
import { Loader } from './Loader/Loader';
import { toast, ToastContainer } from 'react-toastify';
import { Materials } from './Materials/Materials';
import { MaterialEditorForm } from './Materials/MaterialEditorForm';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const [materials, setMaterials] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //////////
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const materials = await API.getMaterials();
        if (materials.length === 0) {
          setIsLoading(false);
          return;
        } else {
          setMaterials([...materials]);
          setIsLoading(false);
        }
      } catch (error) {
        toast.error({ error });
      }
    };
    console.log(materials);
    fetchData();
    return;
  }, []);
  // async componentDidMount() {
  //   try {
  //     this.setState({ isLoading: true });
  //     const materials = await API.getMaterials();
  //     this.setState({ materials, isLoading: false });
  //   } catch (error) {
  //     toast.error({ error });
  //   }
  // }

  // addMaterial = async values => {
  //   try {
  //     const material = await API.addMaterial(values);
  //     this.setState(state => ({
  //       materials: [...state.materials, material],
  //     }));
  //   } catch (error) {
  //     toast.error({ error });
  //   }
  // };

  // deleteMaterial = async id => {
  //   try {
  //     await API.deleteMaterial(id);
  //     this.setState(state => ({
  //       materials: state.materials.filter(material => material.id !== id),
  //     }));
  //   } catch (error) {
  //     toast.error({ error });
  //   }
  // };

  // updateMaterial = async fields => {
  //   try {
  //     const updatedMaterial = await API.updateMaterial(fields);
  //     this.setState(state => ({
  //       materials: state.materials.map(material =>
  //         material.id === fields.id ? updatedMaterial : material
  //       ),
  //     }));
  //   } catch (error) {
  //     toast.error({ error });
  //   }
  // };
  //////////
  return (
    <Box as="main" p="4">
      {/* <MaterialEditorForm onSubmit={this.addMaterial} /> */}
      {isLoading ? (
        <Loader />
      ) : (
        <Materials
          items={materials}
          // onDelete={this.deleteMaterial}
          // onUpdate={this.updateMaterial}
        />
      )}

      <ToastContainer autoClose={3000} position="top-center" />
    </Box>
  );
};
