// Nomenclatura de variáveis

const listOfCategoryByFollowers = [
  {
    title: 'User',
    followers: 5
  },
  {
    title: 'Friendly',
    followers: 50,
  },
  {
    title: 'Famous',
    followers: 500,
  },
  {
    title: 'Super Star',
    followers: 1000,
  },
]

export default async function getCategoryOfUser(req, res) {
  const githubUsername = String(req.query.username)

  if (!githubUsername) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`
    })
  }

  const responseOfDataRequestOnGithub = await fetch(`https://api.github.com/users/${githubUsername}`);

  if (responseOfDataRequestOnGithub.status === 404) {
    return res.status(400).json({
      message: `User with username "${githubUsername}" not found`
    })
  }

  const githubUserData = await responseOfDataRequestOnGithub.json()

  const orderListOfCategoryByFollowers = listOfCategoryByFollowers.sort((firstItem, secondItem) => secondItem.followers - firstItem.followers);

  const selectCategory = orderListOfCategoryByFollowers.find(category => githubUserData.followers > category.followers)

  const resultOfProcess = {
    github: githubUsername,
    category: selectCategory.title
  }

  return resultOfProcess
}

getCategoryOfUser({
  query: {
    username: 'josepholiveira'
  }
}, {})