export default function Cross(
    { width = "100%", height = "100%", color }
    // props with default values
) {
    // { width, height } === { width: width, height: height }
    console.log(width, height, color)
    return (
        <svg
            style={{ width, height }}
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke={color}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
    )
}