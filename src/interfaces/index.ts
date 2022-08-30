export interface Project {
  id: string;
  subtitle: string;
  title: string;
  updatedAt: string;
  createdAt: string;
  _status: 'published';
  image: {
    id: string;
    filename: string;
    url: string;
    _createdAt: string;
    _updatedAt: string;
  };
}
