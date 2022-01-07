const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            //borderWidth: 10,
            height: 10
        }}
    />
);
export default ColoredLine