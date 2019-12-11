
const processStudents = (user) => {
    return {
        name: `${user.name.first} ${user.name.last}`,
        number: user.phone,
        image: user.picture.medium,
        checked: true,
    }
}

const addKeys = (val, key) => ({ key, ...val })

export const fetchStudents = async () => {
    try {
        const response = await fetch('https://randomuser.me/api/?results=20&nat=us');
        const {results} = await response.json();
        return results.map(processStudents).map(addKeys);
    }
    catch (err) {
        console.log(err);
    }

}

export const login = async (username, password) => {
    //return true;
    const response = await fetch('http://localhost:5678', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({username, password}),
    });
  
    if (response.ok) {
      return true;
    }
  
    const errMessage = await response.text();
    throw new Error(errMessage);
  }