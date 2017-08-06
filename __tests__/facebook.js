
import {getAccessToken, getVideoList, getVideoDetail, videoPost} from '../module/facebook'

describe('Facebook module : GET', () => {
  let _videoId = ''

  it('GET AccessToken', (done) => {
    getAccessToken().then((_at) => {
      expect(typeof _at).toBe('string')
      expect(typeof process.env.GRAPHAPI_ACCESS_TOKEN).toBe('string')
      expect(process.env.GRAPHAPI_ACCESS_TOKEN).toBe(_at)
      done()
    })
  })

  it('GET Video List', (done) => {
    const pageId = 'LADbible'

    getVideoList(pageId).then(list => {
      expect(typeof list).toBe('object')
      expect(typeof list.length).toBe('number')
      _videoId = list[0].id
      done()
    })
  })

  it('GET Video Detail', (done) => {
    const videoId = _videoId

    getVideoDetail(videoId).then(detail => {
      console.log('detail: ', detail)
      expect(typeof detail.id).toBe('string')
      expect(typeof detail.source).toBe('string')
      expect(typeof detail.title).toBe('string')
      expect(typeof detail.description).toBe('string')
      expect(typeof detail.likes).toBe('object')
      expect(typeof detail.length).toBe('number')
      done()
    })
  })
})

describe.skip('Facebook module : POST', () => {
  const mp4Link = 'https://banana-video.s3-ap-southeast-1.amazonaws.com/20455041_514255432249121_1311735655612547072_n.mp4'
  const pageId = '1055050871292193'

  
    const description  = '  '
    const embed = true
    const mp4Url = mp4Link
    const title  = 'I am title peter'
    const social_actions = true
    const content_category = 'COMEDY'


  it('videoPost', (done) => {
    videoPost(pageId, description, embed, mp4Url, title).then((res) => {
      
      console.log(res)

      done()
    },
    (err)=> console.log(err))

  })

})
