import { Dimensions } from 'react-native';

export function calculateDimen(size) {
    if (size === 1) {
        return size
    }
    if (Dimensions.get("window").width > 320) {
        return (
            size
        )
    } else {
        return (
            size * 0.88
        )
    }
}