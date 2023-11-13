import { gql, Apollo } from 'apollo-angular'

const GET_PRODUCTS = gql`

	query GetProducts {
	
		products(options: { take: 100 }) {
		
			items {
				id
				name
				description
           }
        }
    } 
`

const GET_PRODUCT_BY_ID = gql`

	query GetProductById($id: ID!) {
	
		product(id: $id) {
			id
			name
			description 
        }
    }
`

const SORT_BY_NAME = gql`

	query GetProductsSorted($type: SortOrder!) {
	
		products(options: { take: 100, sort: { name: $type } }) {
			
			items {
				id
				name
				description
            }       
        }
    }
`

const FILTER_BY_SLUG = gql`

	query GetProductsSorted($word: String!) {
	
		products(options: { take: 100, filter:{slug: {contains: $word}} }) {
		
			items {
				id
				name
				description
				slug
            }       
        }
    }
`

export { GET_PRODUCTS, GET_PRODUCT_BY_ID, SORT_BY_NAME, FILTER_BY_SLUG };
