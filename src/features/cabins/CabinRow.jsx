import styled from "styled-components";
import { formatCurrency } from '../../utils/helpers';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCabin } from '../../services/apiCabins';


import Swal from 'sweetalert2';
import toast from 'react-hot-toast';


const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

export default function CabinRow( { cabin } ) {

  const { name, maxCapacity, regularPrice, discount, image, id: cabinId } = cabin;

  const queryClient = useQueryClient()

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['cabins']
      })
      toast.success('Se elimino correctamente')
    },
    onError: ( error ) => {
      toast.error(error.message)
    }
  })

  function handleDelete( id ) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esta acción',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        // Aquí llamas a la función para eliminar el elemento
        mutate( id )
        
        // Swal.fire('Eliminado', 'El elemento ha sido eliminado', 'success');
      }
    }).catch( error => {
      throw new Error(error)
    })
  };


  return (
    <TableRow>
      <Img src={ image } />
      <Cabin>{ name }</Cabin>
      <div>Fits up tp { maxCapacity }</div>
      <Price>{ formatCurrency( regularPrice ) }</Price>
      <Discount>{ formatCurrency( discount ) }</Discount>
      <button onClick={ () => handleDelete( cabinId ) } disabled={ isDeleting }>Delete</button>
    </TableRow>
  );
}
