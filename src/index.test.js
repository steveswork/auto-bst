import Tree from '@webkrafters/auto-bst';

describe( 'tree', () => {
	const tree = new Tree([ 5, 9, 1, 4, 2, 0, 4, 8, 1 ]);
	test( 'is a tree', () => { expect( Tree.isValid( tree ) ).toBe( true ) } );
	test( 'unique and sorted values', () => { expect( tree.values ).toStrictEqual([ 0, 1, 2, 4, 5, 8, 9 ]) } );
	test.each( tree.values.map(( v, i ) => [ v, i ]) )(
		'each tree value to be encased in a node using value %i at index #%i', ( value, index ) => {
			expect( tree.getNodeAt( index ).value ).toBe( value )
		}
	)
} );