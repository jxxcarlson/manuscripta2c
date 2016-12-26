export interface Image {
  id: number
  owner_id: number
  title: string
  storage_url: string
  public: boolean

}

export const initialImage: Image = {

  id: 58,
  owner_id: 39,
  title: 'Mountain bluebird',
  storage_url: 'http://psurl.s3.amazonaws.com/images/jc/Mountain_Bluebird-cc01.jpg',
  public: true

}


/**
 attribute :id, Integer
 attribute :title, String

 attribute :owner_id, Integer

 attribute :created_at, DateTime
 attribute :updated_at, DateTime

 attribute :url, String
 attribute :content_type, String
 attribute :source, String
 attribute :public, Boolean

 attribute :dict, JSON
 attribute :tags, PGStringArray

 attribute :bucket, String
 attribute :path, String
 attribute :file, String
 **/
