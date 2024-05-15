import { Text, View } from 'react-native';

const RepositoryItem = (fullName, description, language, forksCount, stars, reviews, rating) =>{
return (<View>
    <Text>Full name: {fullName}</Text>
    <Text>Description: {description}</Text>
    <Text>Language: {language}</Text>
    <Text>Stars: {stars}</Text>
    <Text>Forks: {forksCount}</Text>
    <Text>Reviews: {reviews}</Text>
    <Text>Rating: {rating}</Text> 
    
    
    <Text>hello</Text>
</View>)
}

export default RepositoryItem