import React from 'react';

type MyProps = {
	name: string;
	age: number;
};

function PropsTest({ name, age }: MyProps) {
	return <div>안녕, {name}</div>;
}

export default PropsTest;
